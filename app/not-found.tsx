import { i18n } from '@/lib/i18n';
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect(`/${i18n.defaultLanguage}`);
}
