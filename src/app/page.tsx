'use client';

import Image from 'next/image';
import logo from '../assets/logo.svg';
import { useEffect, useState } from 'react';
import { Card } from './card';
import { SegmentedControl } from './segmented-control';

export type deviceSize = 'watch' | 'phone';

const images = [
  'https://images.unsplash.com/photo-1615866431878-500cc9e74d82',
  'https://images.unsplash.com/photo-1637836375461-197de8876f90',
  'https://images.unsplash.com/photo-1602188324312-e1cd6383d2fe',
  'https://images.unsplash.com/photo-1633837017792-4fb5dcf3f4bf',
  'https://images.unsplash.com/photo-1612909211110-56d332f3688b',
  'https://images.unsplash.com/photo-1653669741203-2b813964d5e9',
  'https://images.unsplash.com/photo-1614889817822-b26163d7268f',
  'https://images.unsplash.com/photo-1563305123-1548e19a200e',
  'https://images.unsplash.com/photo-1612052828302-b10880f8e3db',
  'https://images.unsplash.com/photo-1586596436497-8d6f8d1d921f',
  'https://images.unsplash.com/photo-1489648022186-8f49310909a0',
  'https://images.unsplash.com/photo-1598647915099-95b8a39798d6',
]

export default function Home() {
  const [size, setSize] = useState<deviceSize>('phone'); 
  const [hasTouch, setHasTouch] = useState(false);
  
  useEffect(() => setHasTouch(window.matchMedia("(pointer: coarse)").matches), []);

  return (
    <>
      <header className="w-full h-20 flex justify-center items-center border-b border-clay mb-8 sm:mb-14">
        <Image src={logo.src} height={logo.height} width={logo.width} alt="Edge and node logo" priority />
      </header>
      <main className="pb-4 text-white">
        <div className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-[76px]">
            <span className="body-small relative py-2 px-4 mx-px my-px relative self-start rounded-full bg-midnight bg-clip-padding
            before:content[''] before:z-[-1] before:rounded-full before:absolute before:inset-[-1px] before:bg-gradient-to-r before:from-funky-start before:to-funky-end
            ">
              Introducing NFT Wallpapers
            </span>
            <span className="title-large sm:display-large">CC0 NFT Assets as wallpapers</span>
            <span className="body-small sm:body-large text-smokey">{`Grab the NFT you like for your ${size} wallpaper`}</span>
            <SegmentedControl
              className="self-stretch sm:self-start"
              items={[{label: 'Phone', value: 'phone'}, {label: 'Watch', value: 'watch'}]}
              onChange={(value) => setSize(value as deviceSize)}
            />
        </div>
        <div className="relative w-full
          before:content-[''] before:z-[2] before:absolute before:inset-y-0 before:start-0 before:w-5 before:bg-gradient-to-r before:from-midnight before:to-midnight-alpha-0
          after:content-[''] after:z-[2] after:absolute after:inset-y-0 after:end-0 after:w-5 after:bg-gradient-to-l after:from-midnight after:to-midnight-alpha-0
        ">
            <ul className="w-full overflow-auto flex gap-6 pb-4 px-4 sm:px-[76px] mt-14 sm:mt-10">
              {images.map((src, i) => (
                <Card key={`${src}-${i}`} src={src} hasTouch={hasTouch} size={size} i={i} />
              ))}
            </ul>
          </div>
      </main>
    </>
  )
}
