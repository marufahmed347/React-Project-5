import { cn, Dropdown,DropdownTrigger,DropdownMenu,DropdownItem,Button } from '@heroui/react';

const ProfileDropDown = ({isDark}) => {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="none"
            color="primary"
            className={cn("text-gray-500", isDark && "bg-black text-white")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={cn("text-gray-500 w-4 h-4", isDark && "text-white")}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg> 
            Account
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="profile">
          <DropdownItem key="new"></DropdownItem>
          <DropdownItem key="copy">Login</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfileDropDown;