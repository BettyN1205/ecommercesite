export default function AuthLayout({children}:{children: React.ReactNode}){
    return (
        <div className="flex items-center justify-center h-full">
        {children}
        </div>
    )
}


// 解释：
// 典型的 React 函数组件写法：
// export default function AuthLayout({children }){
//     return (
//         <div>
//             {children}
//         </div>
//     )
// }
// 主要区别在于参数部分的书写方式：

// 在你给我的代码中，使用了 TypeScript 类型注解，明确指定了 children 参数的类型为 React.ReactNode。
// 在典型的写法中，省略了类型注解，直接使用了对象解构的语法，将 children 作为参数。
// 这两种写法在功能上是等价的，但是 TypeScript 类型注解的使用可以使代码更加清晰明了，
