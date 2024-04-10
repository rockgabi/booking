
export type TrendingDestination = {
  image: string
  heading: string
  flag: string
  href: string
}

const trendingDestinations: TrendingDestination[] = [
  {
    image: 'https://cf.bstatic.com/xdata/images/city/600x600/619763.jpg?k=3bfc62a779df5b92694287e9fc0b82d795f93700ddf8887d66f3191ee745dcc5&o=',
    heading: 'Tokyo',
    flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAclBMVEX///8AAAAAAAAAAAAAAAD////++fn29vbv7+/85uj62dz50tX4zdD3ycz2wcX2u77yparxmJ7wj5buiIvsf4LqZWzoX2XoW2DmW1vmT1LmTVLkP0jiPz/jPUXiNT/iMDrhMDPdEh7dDxvbDw/cCw7bCwsmrPLtAAAABXRSTlMAESIzRJTdRHwAAACNSURBVHjardFtD4IgEMBx0fChMk0SpAwN8Pt/Rd3dxopdm239X93dj3ck/4yRbXdOxpKUhnQHVK0QbfUGOU4XOSg1yAa3PMBR3yF9ikCMD2i8BShgUvMEzRoeFgGe9gVZE0HvLOQU/4TaOoQmQMmhq1u8X3yHWwmAnXtjZM0jCO0Cqg1YdiDK2Ncf/L0VctoPl97VLi8AAAAASUVORK5CYII=',
    href: '/destination/tokyo',
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/city/600x600/619709.jpg?k=31126b21ebbe0b19bc7721867fc25e874124ba3a4b95d173b0661dae601b5018&o=',
    heading: 'Osaka',
    flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAclBMVEX///8AAAAAAAAAAAAAAAD////++fn29vbv7+/85uj62dz50tX4zdD3ycz2wcX2u77yparxmJ7wj5buiIvsf4LqZWzoX2XoW2DmW1vmT1LmTVLkP0jiPz/jPUXiNT/iMDrhMDPdEh7dDxvbDw/cCw7bCwsmrPLtAAAABXRSTlMAESIzRJTdRHwAAACNSURBVHjardFtD4IgEMBx0fChMk0SpAwN8Pt/Rd3dxopdm239X93dj3ck/4yRbXdOxpKUhnQHVK0QbfUGOU4XOSg1yAa3PMBR3yF9ikCMD2i8BShgUvMEzRoeFgGe9gVZE0HvLOQU/4TaOoQmQMmhq1u8X3yHWwmAnXtjZM0jCO0Cqg1YdiDK2Ncf/L0VctoPl97VLi8AAAAASUVORK5CYII=',
    href: '/destination/osaka',
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/city/600x600/971332.jpg?k=557e806783551455aa9f68b4180bef64ba3dac7cd2c0c4f268c1bfdbdbc01f83&o=',
    heading: 'Kyoto',
    flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAclBMVEX///8AAAAAAAAAAAAAAAD////++fn29vbv7+/85uj62dz50tX4zdD3ycz2wcX2u77yparxmJ7wj5buiIvsf4LqZWzoX2XoW2DmW1vmT1LmTVLkP0jiPz/jPUXiNT/iMDrhMDPdEh7dDxvbDw/cCw7bCwsmrPLtAAAABXRSTlMAESIzRJTdRHwAAACNSURBVHjardFtD4IgEMBx0fChMk0SpAwN8Pt/Rd3dxopdm239X93dj3ck/4yRbXdOxpKUhnQHVK0QbfUGOU4XOSg1yAa3PMBR3yF9ikCMD2i8BShgUvMEzRoeFgGe9gVZE0HvLOQU/4TaOoQmQMmhq1u8X3yHWwmAnXtjZM0jCO0Cqg1YdiDK2Ncf/L0VctoPl97VLi8AAAAASUVORK5CYII=',
    href: '/destination/kyoto',
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/city/600x600/643718.jpg?k=93393cb61d9296abc2a4c96da09cb280c0ec100624e5f1a5a3f1c78c3f714ee3&o=',
    heading: 'Hiroshima',
    flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAclBMVEX///8AAAAAAAAAAAAAAAD////++fn29vbv7+/85uj62dz50tX4zdD3ycz2wcX2u77yparxmJ7wj5buiIvsf4LqZWzoX2XoW2DmW1vmT1LmTVLkP0jiPz/jPUXiNT/iMDrhMDPdEh7dDxvbDw/cCw7bCwsmrPLtAAAABXRSTlMAESIzRJTdRHwAAACNSURBVHjardFtD4IgEMBx0fChMk0SpAwN8Pt/Rd3dxopdm239X93dj3ck/4yRbXdOxpKUhnQHVK0QbfUGOU4XOSg1yAa3PMBR3yF9ikCMD2i8BShgUvMEzRoeFgGe9gVZE0HvLOQU/4TaOoQmQMmhq1u8X3yHWwmAnXtjZM0jCO0Cqg1YdiDK2Ncf/L0VctoPl97VLi8AAAAASUVORK5CYII=',
    href: '/destination/hiroshima',
  },
  {
    image: 'https://cf.bstatic.com/xdata/images/city/600x600/643738.jpg?k=119cee22a20b0c216da84e702496a4d03c08265b93845a7212530490481f4664&o=',
    heading: 'Kanazawa',
    flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAclBMVEX///8AAAAAAAAAAAAAAAD////++fn29vbv7+/85uj62dz50tX4zdD3ycz2wcX2u77yparxmJ7wj5buiIvsf4LqZWzoX2XoW2DmW1vmT1LmTVLkP0jiPz/jPUXiNT/iMDrhMDPdEh7dDxvbDw/cCw7bCwsmrPLtAAAABXRSTlMAESIzRJTdRHwAAACNSURBVHjardFtD4IgEMBx0fChMk0SpAwN8Pt/Rd3dxopdm239X93dj3ck/4yRbXdOxpKUhnQHVK0QbfUGOU4XOSg1yAa3PMBR3yF9ikCMD2i8BShgUvMEzRoeFgGe9gVZE0HvLOQU/4TaOoQmQMmhq1u8X3yHWwmAnXtjZM0jCO0Cqg1YdiDK2Ncf/L0VctoPl97VLi8AAAAASUVORK5CYII=',
    href: '/destination/kanazawa',
  }
]

export default trendingDestinations
