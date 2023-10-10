import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from '../../../../../firebase';
import { NextResponse } from "next/server";
export async function GET (request: Request) {
  //return all news data from database
  try {
    const q = await getDocs(collection(firestore, "news"));
    const data = q.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    console.log('data in handler', data)
    return NextResponse.json({data})
  } catch(error) {
    return NextResponse.json(error)
  }
}

export async function POST (request:Request) {
  // for admin endpoint
  console.log('rrr in post:', request)
  const body = await request.json()
  console.log('post news data:', body)

  return NextResponse.json({body})
}