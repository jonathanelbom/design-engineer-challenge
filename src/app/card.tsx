import clsx from "clsx"
import Image from "next/image"
import { deviceSize } from "./page"
import { useState } from "react"
import {motion, AnimatePresence} from 'framer-motion';

export const Card = ({size = 'watch', src, hasTouch, i}: {size: deviceSize, src: string, hasTouch: boolean, i: number}) => {
    const [detailsShown, setDetailsShown] = useState(false);
    const hasHover = !hasTouch;
    const isHovered = hasHover && detailsShown;

    return (
        <li
            className={clsx(
                "relative flex shrink-0 grow-0 relative will-change-[width,_height] transition-[width,_height] duration-500 ease-ease-out-back", {
                    "w-[240px] h-[240px] sm:w-[200px]": size === 'watch',
                    "w-[240px] h-[480px] sm:w-[260px] sm:h-[520px]": size === 'phone',
                }
            )}
            // pointer/touch handlers added depending on touchdevice or not
            {...(!hasTouch && {
                onMouseEnter: () => setDetailsShown(true),
                onMouseLeave: () => setDetailsShown(false),
            })}
            {...(hasTouch && {
                onClick: () => setDetailsShown(prev => !prev),
            })}
        >
            <Image
                src={src} height={520} width={240} priority alt={`Wallpaper image ${i +1}`}
                className="rounded-md h-full w-full max-w-none object-cover object-center"
            />

            <AnimatePresence>
                {detailsShown && (
                    <motion.div
                        className={clsx(
                            "flex bg-steel flex-col p-4 z-[1] shrink-0 absolute justify-between",
                            {
                                "rounded-tr-lg rounded-br-lg top-0 left-full h-full w-[296px] border-s-0 border border-clay": !hasTouch,
                                "rounded-md inset-0 shrink-0 absolute": hasTouch,
                            }
                        )}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <div className={clsx(
                            "flex bg-steel flex-col justify-between",
                            {
                                "gap-4": size === 'watch',
                                "gap-6": size !== 'watch',
                            },
                        )}>
                            <div className="flex flex-col gap-2 sm:mb-2">
                                <span className="caption-large text-lavender">Wallpapers of Unsplash</span>
                                <span className="body-medium">Human and Machine</span>
                                {size === 'phone' && <span className="caption-large text-lavender">Description for this item, would be a metadata for the collection as a fallback</span>}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <span className="caption-medium text-lavender">Total Assets:</span>
                                    <span className="caption-medium">4,000</span>
                                </div>
                                <hr className="text-clay"/>
                                <div className="flex justify-between">
                                    <span className="caption-medium text-lavender">Asset Type:</span>
                                    <span className="caption-medium">ERC-721</span>
                                </div>
                            </div>    
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    )
}
