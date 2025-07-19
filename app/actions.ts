'use server'
 
import { cookies } from 'next/headers'
 

export async function getUserId() {
  'use server'
  const cookieStore = await cookies()
  return cookieStore.get('userId')?.value;
}

export async function setUserId(userId: number) {
  'use server'
  const cookieStore = await cookies()
  cookieStore.set('userId', userId.toString())
}