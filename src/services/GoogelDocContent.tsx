import { FC } from 'react';

type PropsType = {
    url: string
}

const GoogleDocContent: FC<PropsType> = ({ url }) => {

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src={url}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Google Doc Viewer"
                sandbox="allow-same-origin allow-scripts"
                allow="fullscreen"
            // security=''
            />
        </div>
    );
};

export default GoogleDocContent;
