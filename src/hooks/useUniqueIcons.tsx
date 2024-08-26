import { useMemo } from 'react';
import { Icon } from 'src/types/Icon';

const shuffleArray = (array: any[]) => {
    return array.slice().sort(() => 0.5 - Math.random());
};

const getUniqueIcons = (data: Icon[], count: number): Icon[] => {
    const srcMap = new Map<string, Icon[]>();
    data.forEach(icon => {
        if (!srcMap.has(icon.src)) {
            srcMap.set(icon.src, []);
        }
        srcMap.get(icon.src)?.push(icon);
    });

    const srcArray = Array.from(srcMap.keys());
    const shuffledSrcs = shuffleArray(srcArray);

    const uniqueIcons: Icon[] = [];
    for (const src of shuffledSrcs) {
        if (uniqueIcons.length >= count) break;
        const iconsWithSrc = srcMap.get(src);
        if (iconsWithSrc) {
            uniqueIcons.push(iconsWithSrc[0]);
        }
    }

    return uniqueIcons.slice(0, count);
};

const useUniqueIcons = (data: Icon[], count: number): Icon[] => {
    return useMemo(() => getUniqueIcons(data, count), [data, count]);
};

export default useUniqueIcons;
