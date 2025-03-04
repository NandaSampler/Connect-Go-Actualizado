import { Flex, Text } from '@chakra-ui/react';
import { ClientAuthenticationInfo } from '../../../../utils/constants';

type ClientAuthenticationMessageProps = {
  messageInfo: ClientAuthenticationInfo;
};
const ClientAuthenticationMessage = ({
  messageInfo,
}: ClientAuthenticationMessageProps) => {
  const { bgColor, endingDate, footer, header, name, startingDate } =
    messageInfo;

  const borderColor = (bgColor: string) => {
    switch (bgColor) {
      case 'authGreen':
        return '#66bb6a';
      case 'authYellow':
        return '#ffca28';
      case 'authOrange':
        return '#ff7043';
      case 'authRed':
        return '#ef5350';
      case 'authBlue':
        return '#26c6da';
      default:
        return '#66bb6a';
    }
  };

  return (
    <Flex
      bgColor={bgColor}
      borderTop={'0.5rem solid'}
      borderColor={borderColor(bgColor)}
      borderRadius={'lg'}
      bottom={'0px'}
      color={'background'}
      flexDir={'column'}
      justifyContent={'space-between'}
      m={'1rem'}
      p={header && '1.5rem'}
      position={'absolute'}
      shadow={'md'}
    >
      <Text fontSize={'26px'} fontWeight={'semibold'}>
        {header}
      </Text>
      <Text fontSize={'24px'}>{name}</Text>
      <Flex>
        {startingDate && (
          <Flex justifyContent={'center'} mr={'3rem'}>
            <Text fontSize={'22px'} fontWeight={'semibold'}>
              {'Fecha inicial:'}
            </Text>
            <Text fontSize={'22px'}>
              {startingDate.toLocaleString('es-BO').split(',')[0]}
            </Text>
          </Flex>
        )}
        {endingDate && (
          <Flex justifyContent={'center'} ml={'3rem'}>
            <Text fontSize={'22px'} fontWeight={'semibold'}>
              {'Fecha final:'}
            </Text>
            <Text fontSize={'22px'}>
              {endingDate.toLocaleString('es-BO').split(',')[0]}
            </Text>
          </Flex>
        )}
      </Flex>
      <Text fontSize={'24px'} alignSelf={'end'}>
        {footer}
      </Text>
    </Flex>
  );
};

export default ClientAuthenticationMessage;
