import React, { useState } from 'react'
import { Navbar,NavbarBrand,NavbarMenuToggle,NavbarMenuItem,NavbarMenu,NavbarContent,NavbarItem,Link } from '@heroui/react';
import { Dropdown,DropdownTrigger,DropdownMenu,DropdownItem,Button } from '@heroui/react';
import { NavLink } from 'react-router-dom';
import MyModal from './homepage/Modal';
import ProfileDropDown from './homepage/Dropdown';


const value = true;

function MyNavbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuitems = ['Eat & Drink','Club','Things to do','Shoping','Account','Contact']

  return (
    <>
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth='2xl'>
        <NavbarContent className='sm:hidden' justify='start'>
            <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>

            </NavbarMenuToggle>
        </NavbarContent>

        <NavbarContent className='sm:hidden pr-3'>
            <NavbarBrand>
                <NavLink to='/'><img className='w-44' src="logo.png" alt="" /></NavLink>
            </NavbarBrand>
        </NavbarContent>

        {/* dekstop device */}

        <NavbarContent className='hidden sm:flex gap-4 w-full justify-center'>
            <NavbarBrand>
                <NavbarBrand>
                    <NavLink to='/'><img className='w-44' src="logo.png" alt="" /></NavLink>
                </NavbarBrand>
            </NavbarBrand>

            <NavbarItem>
                <NavLink to='/drink' className='text-black' style={({ isActive }) => ({
                color: isActive ? "#0E8BFF" : "black",
                })}>Eat & drink</NavLink>
            </NavbarItem>

            <NavbarItem>
                <NavLink to='/club' style={({ isActive }) => ({
                color: isActive ? "#0E8BFF" : "black",
                })} >Club <sup className='text-[8px] px-2'>+HOT</sup></NavLink>
            </NavbarItem>

            <NavbarItem>
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant='none'>Things to do <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label='Example with disabled actions'>
                        <DropdownItem key='Water'>Water Sports</DropdownItem>
                        <DropdownItem key='Day'>Day Parties</DropdownItem>
                        <DropdownItem key='Outdoors'>Outdoors</DropdownItem>
                        <DropdownItem key='Rentals'>Rentals</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarItem>

            <NavbarItem>
                <img src="shoping.png" alt="" />
            </NavbarItem>

            <NavbarItem>
                {value === true ? <MyModal/> : <ProfileDropDown/>}
            </NavbarItem>

            <NavbarItem>
                <Button color='primary'>Contact Now</Button>
            </NavbarItem>

        </NavbarContent>

        <div className='md:hidden'>
        <NavbarContent className='w-full' justify='end'>
            <NavbarItem className='hidden lg:flex'></NavbarItem>

            <NavbarItem>
                <img src="shoping.png" alt="" />
            </NavbarItem>
        </NavbarContent>

        <NavbarMenu className='bg-[#F5FAFF]'>
            {menuitems.map((item,index) =>(
                <NavbarMenuItem key={index}>
                    <Link className='w-full text-black'>{item}</Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
        </div>


    </Navbar>
    </>
  )
}

export default MyNavbar;