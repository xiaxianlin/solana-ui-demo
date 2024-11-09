import { useCreateMint } from '@/hooks/useCreateMint'
import { Button } from 'antd'

export const CreateMint = () => {
  const { singuare, mint, create } = useCreateMint()
  return (
    <>
      <div>
        <Button onClick={create}>Create Mint</Button>
      </div>
      {singuare ? (
        <div>
          <p>Token Mint Address: {mint}</p>
          <p>View your transaction on </p>
          <a href={`https://explorer.solana.com/tx/${singuare}?cluster=devnet`}>Solana Explorer</a>
        </div>
      ) : null}
    </>
  )
}
