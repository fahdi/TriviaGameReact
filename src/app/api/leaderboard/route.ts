import { NextResponse } from 'next/server';

export async function GET() {
    // Fetch leaderboard data from your database

    const leaderboard = [
        { username: 'User1', score: 100 },
        { username: 'User2', score: 90 },
        // ...more data
    ];

    return NextResponse.json(leaderboard);
}
