import { useEffect } from 'react';

const TitleHooks = (title) => {
    useEffect(() => {
        document.title = `ToyBizz | ${title}`
    }, [title])
};

export default TitleHooks;