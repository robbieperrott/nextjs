'use server'
 
import { cookies } from 'next/headers'
 
const defaultUserId = 1;

export async function getUserId() {
  'use server'
  const cookieStore = await cookies()
  const userIdCookie = cookieStore.get('userId');
  return userIdCookie ? parseInt(userIdCookie.value) : defaultUserId;
}

export async function setUserId(userId: number) {
  'use server'
  const cookieStore = await cookies()
  cookieStore.set('userId', userId.toString())
}