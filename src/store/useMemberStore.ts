import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

type Member = {
  id: string;
  name: string;
};

type MemberState = {
  member: Member | null;
  setMember: (member: Member) => void;
};

const useMemberStore = create<MemberState>(set => ({
  member: null,
  setMember: member => {
    set({ member });
  },
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('MemberStore', useMemberStore);
}

export default useMemberStore;
