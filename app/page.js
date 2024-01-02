import Image from 'next/image';
import Account from './account/page';
import Timer from './timer/page';
import Comment from './comment/page';
import Contact from './contact/page';
import Cover from './cover/page';
import Gallery from './gallery/page';
import Location from './location/page';
import Video from './video/page';
import Introduce from './introduce/page';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Cover />
      <Introduce />
      <Timer />
      <Contact />
      <Account />
      <Location />
      <Gallery />
      <Video />
      <Comment />
    </main>
  )
}
