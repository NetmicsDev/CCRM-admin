/// 현재는 쓸 아이콘 이름만 받아 미리 각 컴포넌트를 import 받고
/// 그 중에서만 dynamic으로 호출할 수 있도록 하는 걸로 결정
import {
  type LucideProps,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  FileSymlink,
  LayoutDashboard,
  LibraryBig,
  MessageCircleWarning,
  Users,
  WalletCards,
  Eye,
  EyeOff,
  MoreVertical,
  Edit2,
  SquarePen,
  Send,
  UserCircle,
  Download,
  FileSearch,
  Printer,
  Trash,
  X,
  Plus,
  FileImage,
} from "lucide-react";

const iconMap = {
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-down": ChevronDown,
  "chevron-up": ChevronUp,
  "layout-dashboard": LayoutDashboard,
  "file-symlink": FileSymlink,
  "library-big": LibraryBig,
  "message-circle-warning": MessageCircleWarning,
  users: Users,
  "wallet-cards": WalletCards,
  eye: Eye,
  "eye-off": EyeOff,
  "more-vertical": MoreVertical,
  "edit-2": Edit2,
  "square-pen": SquarePen,
  send: Send,
  "user-circle": UserCircle,
  download: Download,
  "file-search": FileSearch,
  printer: Printer,
  trash: Trash,
  close: X,
  plus: Plus,
  "file-image": FileImage,
};
export type IconType = keyof typeof iconMap;

interface IconProps extends LucideProps {
  type: IconType;
}

export default function Icon({ type, ...props }: IconProps) {
  const Icon = iconMap[type];
  return <Icon {...props} />;
}

/// Lucide 공식 가이드에 나와있는 방법
/// https://lucide.dev/guide/packages/lucide-react
/// production 환경에선 문제가 없으나
/// development 환경에선 계속 모듈을 3천개씩(모든 아이콘을 죄다 불러온듯) 컴파일해서 느려진다.
// import dynamic from 'next/dynamic'
// import { LucideProps } from 'lucide-react';
// import dynamicIconImports from 'lucide-react/dynamicIconImports';

// interface IconProps extends LucideProps {
//   name: keyof typeof dynamicIconImports;
// }

// const Icon = ({ name, ...props }: IconProps) => {
//   const LucideIcon = dynamic(dynamicIconImports[name])

//   return <LucideIcon {...props} />;
//  };

// export default Icon;

/// 깃허브에서 관련 이슈로 나온 차선책
/// https://github.com/lucide-icons/lucide/issues/1576
/// 속도가 더 빨리지긴 하지만 여전히 딜레이가 체감됨 (0.6초 정도)
/// string을 아이콘 이름으로 바꾸는 방식이라 typescript의 지원도 불가
// import { type LucideProps, icons } from "lucide-react";

// type IconComponentName = keyof typeof icons;

// interface IconProps extends LucideProps {
//   name: string; // because this is coming from the CMS
// }

// // 👮‍♀️ guard
// function isValidIconComponent(
//   componentName: string
// ): componentName is IconComponentName {
//   return componentName in icons;
// }

// export function DynamicIcon({ name, ...props }: IconProps) {
//   // we need to convert kebab-case to PascalCase because we formerly relied on
//   // lucide-react/dynamicIconImports and the icon names (not the component names) are what are stored in the CMS.
//   const kebabToPascal = (str: string) =>
//     str
//       .split("-")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join("");

//   const componentName = kebabToPascal(name);

//   // ensure what is in the CMS is a valid icon component
//   if (!isValidIconComponent(componentName)) {
//     return null;
//   }

//   // lucide-react/dynamicIconImports makes makes NextJS development server very slow
//   // https://github.com/lucide-icons/lucide/issues/1576
//   const Icon = icons[componentName];

//   return <Icon {...props} />;
// }
