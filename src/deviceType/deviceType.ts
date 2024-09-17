const enum DeviceType {
    desktop,
    phone,
    tablet,
}

const deviceType: DeviceType = (function detectDeviceType() {
    const ua = window.navigator.userAgent;

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return DeviceType.tablet;
    }

    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
    ) {
        return DeviceType.phone;
    }

    return DeviceType.desktop;
})();

export const isDesktop = deviceType === DeviceType.desktop;
export const isPhone = deviceType === DeviceType.phone;
export const isTablet = deviceType === DeviceType.tablet;
