import React, { useState } from 'react'
import { cn,Button,Input,Modal,ModalBody,ModalContent, } from '@heroui/react'

const MyModal = ({isDark}) => {

    const [isOpen,setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    }

  return (
    <>
    <section>
        <div className='flex flex-wrap gap-3'>
            <Button variant='flat' onPress={handleOpen} className={cn("bg-white text-black", isDark && "bg-black text-white")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("text-gray-500 w-4 h-4", isDark && " text-white")}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Account
            </Button>
        </div>

        <Modal isOpen={isOpen} backdrop='blur' onClose={handleClose} size='5xl' placement='top'>
            <ModalContent>
                <ModalBody className='px-0 py-0'>
                    <div className="flex flex-col md:flex-row w-full h-full md:max-h-[90vh] overflow-y-auto md:overflow-visible">
                        {/* left side */}
                        <div className='bg-[url("LoginImg.png")] bg-cover bg-no-repeat bg-center flex flex-col text-white w-full md:w-1/3 p-8'>
                            <h3 className='text-4xl font-bold mb-5 text-start mt-10'>Sing Up</h3>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus ullamcorper hendrerit quis purus pellentesque. Ac sagittis, convallis non tincidunt interdum eu nullam aliquam maecenas. Enim sed tortor morbi ut suspendisse.{" "}</p>
                        </div>
                        {/* right side */}
                        <div className='w-full md:w-2/3 p-8 bg-white'>
                            <div>
                                <img className='w-fit mx-auto' src="logo.png" alt="" />
                                <h2 className='text-2xl font-bold text-[#26395C] mt-5 mb-2'>Sign up and get exploring!</h2>
                                <p className='text-md mb-4'>
                                Already have an account?{" "}
                                    <a href="" className='text-blue-500'>Sign In</a>
                                </p>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <button className='flex items-center justify-center w-full px-4 py-2 border rounded-md  hover:bg-gray-100'>
                                    <img className='w-5 h-5 mr-3' src="google.png" alt="" />
                                    Sign up with Google
                                </button>
                                <button className='flex items-center justify-center w-full px-4 py-2 border rounded-md  hover:bg-gray-100'>
                                    <img className='w-5 h-5 mr-3' src="facebook.png" alt="" />
                                    Sign up with Facebook
                                </button>
                                <button className='flex items-center justify-center w-full px-4 py-2 border rounded-md  hover:bg-gray-100'>
                                    <img className='w-5 h-5 mr-3' src="apple.png" alt="" />
                                    Sign up with Apple
                                </button>
                                
                            </div>
                            {/* Divider */}
                            <div className="flex items-center my-6 text-center text-gray-500">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="px-3 text-gray-600">or continue with</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>

                            {/* Manual Signup Form */}
                            <form action="" className='mt-10'>
                                <div className='!mb-4'>
                                    <Input type='email' label='Email' placeholder='habluprogrammer@gmail.com' labelPlacement='outside'/>
                                </div>

                                <div className='mb-4 mt-12'>
                                    <Input type='password' label='Pasword' placeholder='***********' labelPlacement='outside'/>
                                </div>
                                <button className='w-full bg-blue-500 text-white py-3 rounded-xl'>Sign Up</button>

                                <p className='text-sm mt-2 text-center'>
                                By creating an account, you agree to our{" "}
                                    <a href="" className='text-blue-500'>Terms & Conditions</a>
                                    {" "}
                                    and{" "}
                                    <a href="" className='text-blue-500'>Privacy Policy</a>
                                    
                                </p>
                            </form>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    </section>
    </>
  )
}

export default MyModal;