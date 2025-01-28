import { subServiceDetails } from '@components/serviceDetails/data'
import { useRouter } from 'next/router'
import { FC } from 'react'
import GoogleDocContent from 'services/GoogelDocContent'

const SubService: FC = () => {
    const router = useRouter()
    const subService = [...subServiceDetails].find((itm) => itm.serviceId === (router.query?.serviceName as string))?.services.find((item) => item.slug === router.query.subServiceName);

    return (
        <div>
            {subService?.fileId && <GoogleDocContent url={`https://docs.google.com/document/d/${subService?.fileId}/preview`} />}
        </div>
    )
}

export default SubService;
