import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useToast } from '../../hooks/common/useToast';

import { putLike, putDisLike } from '../../apis/review/putLike';


export const useLikeMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const likeMutation = useMutation({
    mutationFn: putLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['like'] });
    },
    onError: () => {
      createToast('좋아요 실패');
    },
  });

  return likeMutation;
};

export const useDisLikeMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const disLikeMutation = useMutation({
    mutationFn: putDisLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dislike'] });
    },
    onError: () => {
      createToast('좋아요 취소 실패');
    },
  });

  return disLikeMutation;
};