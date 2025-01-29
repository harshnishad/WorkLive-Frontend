import styled from "styled-components"


const Login = () => {
    const LoginWrapper = styled.div`
     background-color:#051323;
     width:100vw;
     height:100vh;
     display:flex;
     gap:20px;
    `;
    const FirstSection = styled.div`
       width:40vw;
       height:90vh;
       
    `;
    const SecondSection = styled.div`
       background-color:#050E17;
       width:30vw;
       height:90vh;
       margin-top:40px;
       margin-left:10vw;
       border:3px solid #111925;
       border-radius:20px;
    `;
    const Heading = styled.div`
       color:white;
       margin-top:40px;
       margin-left:2vw;
       font-size:35px;
       font-family: "Lexend Deca", sans-serif;
    `;
    const FormSection = styled.div`
     display:flex;
     flex-direction:column;
     margin:40px;
     gap:10px;
    `;
    const FormHeading = styled.label`
     color:#708297;
     font-weight:400;
     font-size:18px;
    `;
    const FormBox = styled.input`
     background-color:#05070A;
     padding:8px;
     border-radius:8px;
     margin-left:3px;
    `;
    const RembermeBox = styled.div`
      margin-top:20px;
    `;
    const Box = styled.input`
     margin:10px;
    `;
    const Button = styled.button`
     margin-top:20px;
     background-color:#fff;
     padding:8px;
     border-radius:8px;
    `;
    return (
    <LoginWrapper>
       <FirstSection>

       </FirstSection>
         <SecondSection>
            <Heading>Sign in</Heading>
            <FormSection>
                  <FormHeading>
                      Email
                  </FormHeading>
                  <FormBox type="text" name="email" />

           
                  <FormHeading>
                      Password
                  </FormHeading>
                  <FormBox type="password" name="password" />
                <RembermeBox >
                    <Box type="checkbox" />
                     
                    
                     <FormHeading>
                        Remember me
                     </FormHeading>
                </RembermeBox>
                  
                  <Button>Sign in</Button>

            </FormSection>
            
         </SecondSection>
    </LoginWrapper>
  )
}

export default Login