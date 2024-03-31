import {Button, Flex, Image} from "@mantine/core";
import {IOperator} from "../../service/OperatorService.ts";
import {logOut} from "../../service/AuthService.ts";
import {LinkTo} from "../../config/links.ts";
import {useNavigate} from "react-router-dom";

const AppHeader = (props: {
    user: IOperator | undefined | null
}) => {
    const {user} = props
    const navigate = useNavigate();
    return (
        <div style={{
            fontSize: 16,
            lineHeight: "1.5",
            width: '100%'
        }}>
            <Flex
                style={{
                    display: 'flex',
                    padding: 10,
                    paddingRight: 15,
                    paddingLeft: 15,
                    boxSizing: 'border-box',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: 1300,
                    justifyContent: 'space-between'
                }}>
                <Image src={'../../../logo/logo_header.svg'} style={{width: 98, display: 'flex'}}/>
                {user ?
                    <>
                            <Button
                                radius="md"
                                size={'lg'}
                                style={{
                                    backgroundColor: '#f4b940',
                                    fontWeight: 400
                                }}
                                onClick={() => {
                                    logOut()
                                        .then(() => navigate(LinkTo.AUTHORIZATION()));
                                }}
                            >
                                ВЫЙТИ
                            </Button>
                    </>
                    :
                    <></>
                }
                {/*<Flex>Биллинг</Flex>*/}
            </Flex>

            <Flex style={{position: 'relative'}}>
                <div style={{
                    height: 25,
                    width: '100%',
                    paddingLeft: 15,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    justifyContent: 'flex-end',
                    display: 'flex',
                    backgroundColor: '#3c5df5',
                }}>
                    <div style={{
                        display: 'flex',
                        fontFamily: 'Gilroy, sans-serif',
                        height: '100%',
                        fontSize: '18px',
                        maxWidth: 1300,
                        textTransform: 'uppercase'
                    }}>
                        <span style={{color: '#f4b940'}}>#время</span>
                        <span style={{backgroundColor: '#f4b940', color: '#3c5df5', paddingRight: 300}}>цифры</span>
                    </div>
                </div>
            </Flex>
        </div>
    )
}

export default AppHeader;