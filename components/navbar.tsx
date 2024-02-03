'use client'
import Image from "next/image";
import React, { useState, ChangeEvent } from 'react';

export default function TOP() {
    const [searchWord, setSearchWord] = useState<string>('');
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value);
    };

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    return (
        <div className="flex justify-between items-center bg-white w-full h-20 px-44 border-b-2 border-b-[EEEEEE}">
            <div className="flex gap-3 justify-start items-center">
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={128}
                    height={25}
                />
                <Image
                    src="/setting.png"
                    alt="setting"
                    width={75}
                    height={19}
                />
            </div>
            <div className="relative w-[290] h-[9]">
                <input
                    type="input"
                    id="searchWord"
                    name="searchword"
                    value={searchWord}
                    onChange={handleChange}
                    placeholder="Search"
                    className={`w-full h-full p-2 rounded-lg border-2 px-[40px] py-[9] ${isInputFocused ? 'border-[#00D094]' : ''}`}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <div className="absolute top-1/2 transform -translate-y-1/2 left-3 pointer-events-none">
                    <Image width={20} height={20} src={'/search-normal.svg'} alt="placeholder-icon" />
                </div>
            </div>
            <div className="items-center">
                <Image
                    src="/down-arrow.png"
                    alt="downarrow"
                    width={140}
                    height={28}
                />
            </div>
        </div>
    );
}
