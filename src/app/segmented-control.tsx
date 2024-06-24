import clsx from "clsx";
import { useState } from "react";

type itemType = {
    label:string,
    value:string,
};

const SegmentedControlButton = ({item, selected, onClick} : {item: itemType, selected: boolean, onClick: (value: string) => void}) => (
    <button
        className={clsx(
            "caption-medium rounded-full px-3.5 py-2.5 grow",
            {
                "text-midnight hover:text-midnight bg-white": selected,
                "text-segmented-control-text-up hover:text-white": !selected
            },
        )}
        onClick={() => onClick(item.value)}
    >
        {item.label}
    </button>
)

export const SegmentedControl = ({items, initialValue, className="", onChange}: {items: itemType[], initialValue?: string, className?: string, onChange?: (value:string) => void}) => {
    const [selectedValue, setSelectedValue] = useState(initialValue ?? items[0]!.value)
    const handleChange = (value: string) => {
        setSelectedValue(value);
        onChange && onChange(value);
    }
    return (
        <div className={clsx(
            "flex bg-steel rounded-full border border-clay", className
        )}
        >
            {items.map((item, i) => (
                <SegmentedControlButton key={`${item.value}-${i}`} item={item} selected={item.value === selectedValue} onClick={(value) => handleChange(value)} />
            ))}
        </div>
    );
}