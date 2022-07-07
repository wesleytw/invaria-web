import Link from 'next/link';


const Footer = () => (
  <footer className="bg-invar-dark border-t-2 border-[#44334C] py-8 text-sm font-semibold text-white">
    <div className="flex flex-col justify-between sm:flex-row px-4 xl:px-36 sm:px-auto container">
      <p className="text-invar-grey select-none">© 2022 InVaria 2222</p>
      <div className="flex flex-col-reverse sm:flex-row mt-4 sm:mt-0 justify-center">
        <div>
          {/* <Link href="/terms">
            <p className="sm:mr-6 hover:underline">
              {`Terms & Conditions`}
            </p>
          </Link> */}
        </div>

        <div>
          {/* <Link href="/privacy">
            <p className="mb-1 sm:mb-auto hover:underline">
              Privacy Policy
            </p>
          </Link> */}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;