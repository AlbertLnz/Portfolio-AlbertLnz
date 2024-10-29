type Props = {
  tool: keyof typeof icons
  className: string
}
import '../../components/tools.css'
import icons from './icons'

const IconSetup: React.FC<Props> = ({ tool, className }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: icons[tool] }}
      className={className}
    />
  )
}

export default IconSetup
