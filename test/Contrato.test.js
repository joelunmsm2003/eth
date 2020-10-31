const Contrato = artifacts.require('Contrato')


require('chai')
  .use(require('chai-as-promised'))
  .should()

function tokens(n) {
  return web3.utils.toWei(n, 'ether');
}

contract('Contrato', (account) => {


  before(async () => {
    token = await Contrato.new()


    //await token.transfer("0xe3c6B4d461f324b47ea78a96cB0B839e7Aad2E9F", tokens('0.000008'))


  })


    describe('Contrato deployment...', async () => {
    it('contract has a name', async () => {
     


      await token.transfer("0x86A487b859c80F1d2d801af21597f3f3D649CE3C", 15000)

      balanceOf = await token.balanceOf(account[0])

      console.log(balanceOf.toString())

      await token.transfer("0x86A487b859c80F1d2d801af21597f3f3D649CE3C", 15000)

      balanceOf = await token.balanceOf(account[0])

      console.log(balanceOf.toString())

      balanceOf = await token.balanceOf(account[1])

      console.log(balanceOf.toString())

            const totalSupply = await token.totalSupply()

      assert.equal(totalSupply,1000000000)



      //assert.equal(balanceOf.toString(),60475904)

    })


  })



})

