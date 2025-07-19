'use server'
 
import { cookies } from 'next/headers'
 
export async function getUserId() {
  'use server'
  const cookieStore = await cookies()
  const userIdCookie = cookieStore.get('userId');
  return userIdCookie ? parseInt(userIdCookie.value) : 1;
}

export async function setUserId(userId: number) {
  'use server'
  const cookieStore = await cookies()
  cookieStore.set('userId', userId.toString())
}