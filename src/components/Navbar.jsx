import React, { useState } from 'react'
import { Navbar,NavbarBrand,NavbarMenuToggle,NavbarMenuItem,NavbarMenu,NavbarContent,NavbarItem,Link } from '@heroui/react';
import { Dropdown,DropdownTrigger,DropdownMenu,DropdownItem,Button } from '@heroui/react';


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
                <img className='w-44' src="logo.png" alt="" />
            </NavbarBrand>
        </NavbarContent>

        {/* dekstop device */}

        <NavbarContent className='hidden sm:flex gap-4 w-full justify-center'>
            <NavbarBrand>
                <NavbarBrand>
                    <img className='w-44' src="logo.png" alt="" />
                </NavbarBrand>
            </NavbarBrand>

            <NavbarItem>
                <Link className='text-black'>Eat & drink</Link>
            </NavbarItem>

            <NavbarItem>
                <Link >Club <sup className='bg-blue-500 text-[8px]'>+HOT</sup></Link>
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
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant='none'> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg> 
                        Acount
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label='Profile'>
                        <DropdownItem key='My Profile'>My Profile</DropdownItem>
                        <DropdownItem key='My History'>My History</DropdownItem>
                        <DropdownItem key='Sign Out'>Sign Out</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
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