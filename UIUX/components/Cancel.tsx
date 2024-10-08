// components/Cancel.tsx
import { Button, Text, Stack, useToast } from "@chakra-ui/react";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import { useState } from "react";
import IPresaleABI from '../abi/IPresale.json';
import { PRESALE_CONTRACT_ADDRESS } from '../utils/config';

const Cancel = () => {
  const [isCanceling, setIsCanceling] = useState(false);
  const toast = useToast();
  const { config } = usePrepareContractWrite({
    addressOrName: PRESALE_CONTRACT_ADDRESS,
    contractInterface: IPresaleABI,
    functionName: 'cancel',
  });

  const { write, isLoading, error } = useContractWrite({
    ...config,
    onSuccess: () => {
      setIsCanceling(false);
      toast({
        title: "Success",
        description: "Presale canceled successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    },
    onError: (err) => {
      setIsCanceling(false);
      toast({
        title: "Error",
        description: `Failed to cancel presale: ${err.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  return (
    <Stack spacing={3}>
      <Text>Cancel Presale</Text>
      <Button
        onClick={() => { setIsCanceling(true); write?.(); }}
        isLoading={isLoading || isCanceling}
        isDisabled={!write || isCanceling}
      >
        Cancel Presale
      </Button>
      {error && <Text color="red.500">Error: {error.message}</Text>}
    </Stack>
  );
};

export default Cancel;

