import { FC } from 'react'
import GoogleDocContent from 'services/GoogelDocContent'

const SubService: FC = () => {
    return (
        <div>

            <GoogleDocContent url='https://docs.google.com/document/d/1_bpiizuhKUmcmuTH8J_NTCzIPLjMvWto/preview' />
        </div>
    )
}

export default SubService
