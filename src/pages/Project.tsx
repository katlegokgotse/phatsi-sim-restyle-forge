import React from 'react';
import { useParams } from 'react-router-dom';

const projectData: Record<string, { description: string; client: string }> = {
  'company-a': {
    description: `PROJECT MANAGEMENT
Rural Roads Assest Management Systems Rural Roads Assest Management Systems Rural Roads Assest Management Systems
Waterberg District Municipality Mopani District Municipality Xhariep District Municipality
2018 2017 2016
Road Asset Management System Key Performance Indicators
North West Province 2016
Rural Roads Assets Management Systems Rural Roads Assets Management Systems Rural Roads Assets Management Systems
Ngaka Modiri Molema District Municipality Eden District Municipality
Namaqua District Municipality
2016 2015 2015
Rural Roads Assets Management Systems Rural Roads Assets Management Systems Rural Roads Assets Management Systems Rural Roads
Assets Management Systems Rural Roads Assets Management Systems
Frances Baard District Municpularity 2015 Lejweleputswa District Municipality 2015 Dr Kenneth Kaunda District Municipality 2014 Bojanala
Platinum District Municipality 2014 Thabo Mofutsanyana District Municipality 2014
Mangaung IPTN Mangaung Metro 2013
Rural Roads Assest Management Systems
Ngaka Modiri Molema District Municipality
2012
Capital Infrastructure Programme Management Kungwini Local Municipality 2012 Programme
Management and Secretariat Gauteng Transport Management Authority 2010 Upgrading of Gravel Roads
to Surface Roads Tswaing Local Municipality 2010 Construction of Palisade Fencing to Cemeteries
Tswaing Local Municipality 2010 Hospital Rentalization Programme Management Gauteng Department
of Public Works 2008 Moremela Low Cost Housing Pfunanani Developers 2002 Consolidated
Municipal Infrastructure Programme Gauteng: DDP & LG 1999 Upgrading of Pietersburg and
Mankweng Hospital Sechaba Consulting Engineers 1999
ROAD STRUCTURES
Mohlakeng Bridges Gauteng: DLGH 2012 Bekkersdal Taxi Rank West Rand District Municipality
2002 Vlakfontein/Majola Roads Intersection Upgrading Emfuleni Local Municipality
2002 Togo Road in Evaton Emfuleni Local Municipality 2002 Cleveland Link Road. Road over Rail Bridge City of
Johannesburg 2001 PWV6 Basic Planning. Interchange Bridges Gautrans 2001 Wonderkop Gravel Roads Madibeng Local Municipality
2001 Segwaelane Gravel Roads Madibeng Local Municipality
2001 Tshepiso North Bulk Sewer Lekoa Vaal Metropolitan Council 2001
CONSTRUCTION MANAGEMENT
Routine Roads Maintenance Programme  (Bronkhorstspruit)
Department of Roads & Transport 2010
Routine Roads Maintenance (Vereeniging) Department of Roads & Transport
2008 Bekkersdal Taxi Rank West Rand District Municipality 2002
Vlakfontein/Majola Roads Intersection Upgrading Emfuleni
Local Municipality 2002 Togo Road in Evaton Emfuleni Local
Municipality 2002 Wonderkop Gravel Roads Madibeng Local
Municipality 2001 Segwaelane Gravel Roads Madibeng Local
Municipality 2001 Tshepiso North Bulk Sewer Lekoa Vaal Metropolitan Council
CONSTRUCTION MANAGEMENT
Routine Roads Maintenance Programme  (Bronkhorstspruit)
Department of Roads & Transport 2010
Routine Roads Maintenance (Vereeniging) Department of Roads & Transport
2008 Bekkersdal Taxi Rank West Rand District Municipality 2002
Vlakfontein/Majola Roads Intersection Upgrading Emfuleni
Local Municipality 2002 Togo Road in Evaton Emfuleni Local
Municipality 2002 Wonderkop Gravel Roads Madibeng Local
Municipality 2001 Segwaelane Gravel Roads Madibeng Local
Municipality 2001 Tshepiso North Bulk Sewer Lekoa Vaal Metropolitan Council 2001`,
    client: `Rural Roads Assest Management Systems Rural Roads Assest Management Systems Rural Roads Assest Management Systems
Waterberg District Municipality Mopani District Municipality Xhariep District Municipality
Road Asset Management System Key Performance Indicators
North West Province
Rural Roads Assets Management Systems Rural Roads Assets Management Systems Rural Roads Assets Management Systems
Ngaka Modiri Molema District Municipality Eden District Municipality
Namaqua District Municipality
Rural Roads Assets Management Systems Rural Roads Assets Management Systems Rural Roads Assets Management Systems Rural Roads
Assets Management Systems Rural Roads Assets Management Systems
Frances Baard District Municpularity Lejweleputswa District Municipality Dr Kenneth Kaunda District Municipality Bojanala
Platinum District Municipality Thabo Mofutsanyana District Municipality
Mangaung IPTN Mangaung Metro
Rural Roads Assest Management Systems
Ngaka Modiri Molema District Municipality
Capital Infrastructure Programme Management Kungwini Local Municipality Programme
Management and Secretariat Gauteng Transport Management Authority Upgrading of Gravel Roads
to Surface Roads Tswaing Local Municipality Construction of Palisade Fencing to Cemeteries
Tswaing Local Municipality Hospital Rentalization Programme Management Gauteng Department
of Public Works Moremela Low Cost Housing Pfunanani Developers Consolidated
Municipal Infrastructure Programme Gauteng: DDP & LG Upgrading of Pietersburg and
Mankweng Hospital Sechaba Consulting Engineers
ROAD STRUCTURES
Mohlakeng Bridges Gauteng: DLGH Bekkersdal Taxi Rank West Rand District Municipality
Vlakfontein/Majola Roads Intersection Upgrading Emfuleni Local Municipality
Togo Road in Evaton Emfuleni Local Municipality Cleveland Link Road. Road over Rail Bridge City of
Johannesburg PWV6 Basic Planning. Interchange Bridges Gautrans Wonderkop Gravel Roads Madibeng Local Municipality
Segwaelane Gravel Roads Madibeng Local Municipality
Tshepiso North Bulk Sewer Lekoa Vaal Metropolitan Council
CONSTRUCTION MANAGEMENT
Routine Roads Maintenance Programme  (Bronkhorstspruit)
Department of Roads & Transport
Routine Roads Maintenance (Vereeniging) Department of Roads & Transport
Bekkersdal Taxi Rank West Rand District Municipality
Vlakfontein/Majola Roads Intersection Upgrading Emfuleni
Local Municipality Togo Road in Evaton Emfuleni Local
Municipality Wonderkop Gravel Roads Madibeng Local
Municipality Segwaelane Gravel Roads Madibeng Local
Municipality Tshepiso North Bulk Sewer Lekoa Vaal Metropolitan Council`,
  },
  'company-b': {
    description: `PUBLIC TRANSPORT
Prefeasibility studies for various Public Transport Facilities Current Public Transport Records
Etkurhuleni Metropolitan Municipality Ethekwini Metro
2015 2013
Public Transport Facilities and Infrastructure Plan North West DPWRT 2013
Development of District ITP, incl. CPTR & Rationalisation of Taxis & Buses
Francis Baard District Municipality 2012
N12 By-Pass Study
Multimodal Public Transport Facilities
SolPlaatjie LM
North West DPWRT
2011 2010
Intersite Park Station : Bus Facilities Intersite 2006 Audit of Minibus Taxi Facilities City of
Johannesburg 2004 Daveyton Station Conceptual and Detailed Design Intersite 2003 Phefeni Taxi
Rank Preliminary Design City of Johannesburg 2001 Monitoring of Public Transport Facilities Greater
Pretoria Metro 2000 TIPP Complex Rail Conceptual Design SA Commuter Rail Corporation 2000
Dunswart Daveyton Rail Corridor SA Commuter Rail Corporation 1999 Limindlela/Leralla Station
Conceptual Design SA Commuter Rail Corporation 1998 Oakmoor Station Conceptual Design SA Commuter Rail Corporation 1988
TRANSPORT MANAGEMENT SYSTEM
Traffic Safety Measures for Soshanguve City of Tshwane 2001 RAM: Phase 1 - Tshwane Road Hierarchy City of Tshwane 2001
Van der Walt Street Road Safety Audit Zambezi Drive Road Safety Audit
TRANSPORT IMPACT STUDIES
Pretoria City Council 2000 Pretoria City Council 2000
Weltevreden Park mixed use Development SJN Development Planners 2000 Eiselen Park
Development SJN Development Planners 1999 Ballyclare mixed use Development ARUP (Pty) Ltd
1998 Brakpan Filling Station ARUP (Pty) Ltd 1988 Rhema Church ARUP (Pty) Ltd 1997
TRANSPORTATION MODELING
EMME/2 Recalibration for Greater Pretoria Pretoria City Council 2000 SATURN Modeling for
PWV9 Greater Johannesburg Metro 2000
MASTER PLANNING
Development of Stormwater Master Plan
Development of Integrated Transport Master Plan (ITMP 25)
Rustenburg Local Municipality Gauteng Dept of Roads and Transport
2015 2013
Road Master Plan Ngaka Modiri Molema DM 2011 Road Master Plan Govern Mbeki Local Municipality 2008`,
    client: `Current Public Transport Records
Etkurhuleni Metropolitan Municipality Ethekwini Metro
North West DPWRT
Francis Baard District Municipality
City of Johannesburg
Greater Pretoria Metro
SA Commuter Rail Corporation
City of Tshwane
Pretoria City Council
SJN Development Planners
ARUP (Pty) Ltd
Pretoria City Council
Rustenburg Local Municipality Gauteng Dept of Roads and Transport`,
  },
  'company-c': {
    description: `TRANSPORT PLANNING AND LAND USE
Development of District ITP
Compilation of Ngaka Modiri Molema District ITP
Compilation of Dr Ruth Segomotsi Mompati District ITP
Development of District ITP
Development of the PLTF
Compilation of Ngaka Modiri Molema District ITP`,
    client: `John Taolo Gaetsewe DM North West Province: DCSTM North West Province: DCSTM John Taolo Gaetsewe DM Northern Cape: DTSL
North West Province: DPTRW North West Province: DPTRW
2015 2015 2015 2015 2013 2012 2011
Giyani & Makhado Multimodal Facility Intersite 2011
Development of a Comprehensive ITP, CPTR, OLS/RATPLAN & PTP
North West Province: DPWRT 2010
Mafikeng LM Multimodal Facility North West DPWRT 2010 Ramotshere Moila LM Multimodal Facility North West DPWRT 2010 Ratlou LM
Multimodal Facility North West DPWRT 2010
National Station Project Precinct Plan Southern Gauteng Region National Station Project Precinct Plan Northern Gauteng Region
Intersite Intersite
2010 2009
Integrated Network Design MNS for DPTRW 2009 Development of a District ITP, Data collection West Rand District Municipality 2009 Development of a Comprehensive ITP, CPTR Gert Sibande District Municipality 2008
Traffic Impact Evaluation DPTRW 2007 Gert Sibande DM: ITP Gert Sibande Municipality 2007
COJ: Parking Policy
Planning of the International Transit and Shopping Centre - Joubert Park
City of Johannesburg City of Johannesburg
2006 2005
Bohlabela: CPTR District Council 2003 Investigation of Dedicated Public Transport City of Johannesburg 2003 JHB: Integrated Transport Plan City of Johannesburg 2003 Land Management and Transport LDOs Eastern Gauteng Services Council 1999 Integrated Transport Plan -
Transportation Lekoa Vaal Metropolitan Council 1999 Current Public Transport Record, TPR2 Lekoa Vaal Metropolitan Council 1998`,
  },
};

const Project = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const project = companyId ? projectData[companyId.toLowerCase()] : null;

  if (!project) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p>The project for the specified company does not exist.</p>
      </div>
    );
  }

  const displayNames: Record<string, string> = {
    'company-a': 'PROJECT MANAGEMENT',
    'company-b': 'PUBLIC TRANSPORT',
    'company-c': 'TRANSPORT PLANNING AND LAND USE',
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Project Details for {displayNames[companyId?.toLowerCase() || '']}</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Description</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">{project.description}</pre>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Client</h2>
        <p>{project.client}</p>
      </section>
    </div>
  );
};

export default Project;
