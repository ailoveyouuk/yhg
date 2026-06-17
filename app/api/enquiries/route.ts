import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, enquiry_type, vehicle, message } = body as {
      name: string;
      email: string;
      phone?: string;
      enquiry_type?: string;
      vehicle?: string;
      message: string;
    };

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    // Upsert customer by email — if they've contacted us before, reuse the record
    const { data: customer, error: customerError } = await supabaseAdmin
      .from('customers')
      .upsert(
        { name: name.trim(), email: email.trim().toLowerCase(), phone: phone?.trim() ?? null },
        { onConflict: 'email', ignoreDuplicates: false }
      )
      .select('id')
      .single();

    if (customerError) {
      console.error('[enquiries] customer upsert error:', customerError);
      throw customerError;
    }

    // Insert enquiry row
    const { error: enquiryError } = await supabaseAdmin.from('enquiries').insert({
      customer_id: customer.id,
      source: 'web_form',
      status: 'new',
      enquiry_type: enquiry_type ?? null,
      vehicle: vehicle?.trim() ?? null,
      message: message.trim(),
    });

    if (enquiryError) {
      console.error('[enquiries] insert error:', enquiryError);
      throw enquiryError;
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[enquiries] unhandled error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
