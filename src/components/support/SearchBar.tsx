import React from 'react'
import SearchIcon from '../../assets/svg/SearchIcon'
import SearchIconSupport from '../../assets/svg/SearchIconSupport'
import ThreeVdots from '../../assets/svg/ThreeVdots'
import Button from '../button/Button'
import Input from '../input/Input'

interface IProps {
    className?: string
    placeholder?: string
    HeaderTitle?: string
    text?: string
    children?: React.ReactNode;
    to?: string | any
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}



const SearchBar = ({ className = "", placeholder = "Search", HeaderTitle, text, children = null, to = "", onClick }: IProps) => {
    return (
        <div className='mb-5'>
            <div className='flex flex-1 items-center justify-between mb-7 ml-3 mr-5'>
                <h2 className='font-semibold'>{HeaderTitle}</h2>


                <ThreeVdots className='cursor-pointer' />
            </div>

            <form className={`flex items-center gap-4 justify-between ${className}`}>
                <div className='h-[45px] flex w-full items-center bg-[#f1f3fb] rounded-[10px]'>
                    <SearchIconSupport className="ml-[.9rem] lg:ml-[1.3125rem] lg:mr-4 mr-3" />
                    <Input
                        className={`flex-1 text-xs w-full lg:text-lg md:text-sm`}
                        type="text" value=''
                        placeholder={placeholder}
                    />
                </div>

                <Button to={to} text={text} {...{ children }} className="ml-auto px-10" {...{onClick}} />
            </form>
        </div>
    )
}

export default SearchBar
