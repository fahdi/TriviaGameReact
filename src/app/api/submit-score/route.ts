import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { username, score } = body;

    // Save the data to your database (e.g., PostgreSQL)

    return NextResponse.json({ message: 'Score submitted successfully!' });
}
