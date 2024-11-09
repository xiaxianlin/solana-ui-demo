import { Button } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import { useAccount } from '@/hooks/useAccount'

export const Layout = () => {
  const { balance, account } = useAccount()
  return (
    <>
      <div className="flex justify-between p-2 border-black border-b-2">
        <div className="flex gap-4">
          <Link to="/course01" replace>
            <Button color="primary" variant="outlined" size="large">
              Clouse01
            </Button>
          </Link>
          <Link to="/course02" replace>
            <Button color="primary" variant="outlined" size="large">
              Clouse02
            </Button>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-2">
          {!!account && <span>{`Balance: ${balance} SOL`}</span>}
        </div>
      </div>
      {!!account && (
        <div className="mx-auto max-w-7xl pt-6">
          <Outlet />
        </div>
      )}
    </>
  )
}
