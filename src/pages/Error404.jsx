import Page_Layout from './Page_Layout'

const Error404 = () => {
    return (
        <Page_Layout>
            <div className="p-4 pt-0 w-full h-full flex items-center justify-center flex-col gap-4">
                <h1 className="text-6xl font-bold tracking-wider">
                    Error<span className="text-sky-600 font-black">404</span>
                </h1>
                <div>Page Not Found</div>
            </div>
        </Page_Layout>
    )
}

export default Error404
