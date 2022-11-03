// 'use client';

import { redirect, useRouter } from 'next/navigation';

export default function Auth() {
  // const router = useRouter()
  // router.push('/auth/login')
  redirect('/auth/login');
  return 'auth';
}
