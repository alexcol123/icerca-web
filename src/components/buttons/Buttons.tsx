import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const DonateButton = ({
  variant = "default",
}: {
  btnText?: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
}) => {
  return (
    <Button
      asChild
      variant={variant}
      size="lg"
      className="group px-8 py-8 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 rounded-full"
    >
      <Link
        href="https://gofund.me/8b5be9aa"
        target="_black"
        className="flex items-center gap-2"
      >
        Contribuir ahora
        <Heart className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
      </Link>
    </Button>
  );
};

export const TestAlertarButton = ({
  btnText = "Alertar",
  variant = "default",
}: {
  btnText?: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
}) => {
  return (
    <Button
      asChild
      size="lg"
      variant={variant}
      className="w-full sm:w-auto animate-pulse"
    >
      <div>
        <div className="text-lg">{btnText}</div>
        <Heart className="ml-2 " />
      </div>
    </Button>
  );
};

// 'use client';

// import { ReloadIcon } from '@radix-ui/react-icons';
// import { useFormStatus } from 'react-dom';
// import { Button } from '@/components/ui/button';
// import { SignInButton } from '@clerk/nextjs';
// import { FaRegHeart, FaHeart } from 'react-icons/fa';
// import { LuTrash2, LuPenSquare } from 'react-icons/lu';
// type btnSize = 'default' | 'lg' | 'sm';

// type SubmitButtonProps = {
//   className?: string;
//   text?: string;
//   size?: btnSize;
// };

// export function SubmitButton({
//   className = '',
//   text = 'submit',
//   size = 'lg',
// }: SubmitButtonProps) {
//   const { pending } = useFormStatus();

//   return (
//     <Button
//       type='submit'
//       disabled={pending}
//       className={`capitalize ${className} `}
//       size={size}
//     >
//       {pending ? (
//         <>
//           <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
//           Please wait...
//         </>
//       ) : (
//         text
//       )}
//     </Button>
//   );
// }

// export const CardSignInButton = () => {
//   return (
//     <SignInButton mode='modal'>
//       <Button
//         type='button'
//         size='icon'
//         variant='outline'
//         className='p-2 cursor-pointer'
//         asChild
//       >
//         <FaRegHeart />
//       </Button>
//     </SignInButton>
//   );
// };

// export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
//   const { pending } = useFormStatus();
//   return (
//     <Button
//       type='submit'
//       size='icon'
//       variant='outline'
//       className='p-2 cursor-pointer'
//     >
//       {pending ? (
//         <ReloadIcon className='animate-spin' />
//       ) : isFavorite ? (
//         <FaHeart />
//       ) : (
//         <FaRegHeart />
//       )}
//     </Button>
//   );
// };

// type actionType = 'edit' | 'delete';
// export const IconButton = ({ actionType }: { actionType: actionType }) => {
//   const { pending } = useFormStatus();

//   const renderIcon = () => {
//     switch (actionType) {
//       case 'edit':
//         return <LuPenSquare />;
//       case 'delete':
//         return <LuTrash2 />;
//       default:
//         const never: never = actionType;
//         throw new Error(`Invalid action type: ${never}`);
//     }
//   };

//   return (
//     <Button
//       type='submit'
//       size='icon'
//       variant='link'
//       className='p-2 cursor-pointer'
//     >
//       {pending ? <ReloadIcon className=' animate-spin' /> : renderIcon()}
//     </Button>
//   );
// };
