import logoWebp from '../assets/logo/justin.webp'
import logoPng from '../assets/logo/justin.png'

export const Logo = () => (
    <picture>
        <source srcSet={logoWebp} type="image/webp" />
        <img
            src={logoPng}
            alt="Justin Davis"
            width={96}
            height={96}
            className="h-[26px] lg:h-[32px] w-auto rounded-md hover:scale-[105%] transition-all duration-50 ease-in-out"
        />
    </picture>
)
