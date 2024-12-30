import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await MongoClient.connect(process.env.MONGO_URI as string);
    await client.connect();
    const db = client.db("Raffle");
    const raffles = await db.collection("RaffleList").find({}).toArray();
    return NextResponse.json(raffles);
  } catch (error: unknown) {
    console.log("error", error);
  }
}
