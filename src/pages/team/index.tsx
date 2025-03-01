import { SearchFilterSection, TeamHeader, TeamList } from '@components/Team';

const Team = () => {
    return (
        <div>
            <TeamHeader />
            <SearchFilterSection />
            <TeamList />
        </div>
    );
};

export default Team;
