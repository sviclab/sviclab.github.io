import type {Metadata} from 'next';
import {getConferenceRecords} from '../../data/conferenceRecords';
import ConferenceExplorer from '../components/ConferenceExplorer';
import PageHero from '../components/PageHero';

export const metadata:Metadata={title:'Conferences | SViC Lab'};

export default function Page(){return <><PageHero eyebrow="Publications" title="Conferences" description="International and domestic conference records." /><section className="content-section page-width"><ConferenceExplorer records={getConferenceRecords()} /></section></>}
