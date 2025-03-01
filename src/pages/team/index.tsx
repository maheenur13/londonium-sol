import { SearchFilterSection, TeamHeader, TeamList } from '@components/Team';
import { FC } from 'react';

const Team: FC = () => {
    return (
        <div>
            <TeamHeader />
            <SearchFilterSection />
            <TeamList />
        </div>
    );
};

export default Team;
