import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

type Member = {
  id: string;
  name: string;
};

type MemberState = {
  member: Member | undefined;
  setMember: (memberId: string) => void;
};

const useMemberStore = create<MemberState>(set => ({
  member: undefined,
  setMember: memberId => {
    //TODO: fetch getMemberName
    set({
      member: {
        id: memberId,
        name: 'fuga',
      },
    });
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('MemberStore', useMemberStore);
}

export default useMemberStore;
