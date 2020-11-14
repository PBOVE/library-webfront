import logo from '/@/assets/svg/logo.svg'
import { useSetting } from '/@/hooks/core/useSetting'

const { title, publicPath } = useSetting()

/**
 *  系统配置文件可用于设置使用系统运行的参数
 **/

interface Config {
  title: string,

  logo: string,

  publicPath: string

  theme: "dark" | "light" | undefined,

  menuWidth: number
}


const config: Config = {
  // 系统名称
  title: title,

  // logo
  logo: logo,

  // 路由
  publicPath: publicPath,

  // 主题
  theme: 'dark',

  // 菜单宽度
  menuWidth: 260
}



export default config

