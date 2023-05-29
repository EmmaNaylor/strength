import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {MdOutlineWavingHand, MdOutlineMedication} from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'All Treatments',
    path: '/services/all_treatments',
    icon: <MdOutlineMedication />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'IV Nutrient Therapy',
        path: '/services/iv_nutrient_therapy',
        icon: <MdOutlineMedication />,
        cName: 'sub-nav'
      },
      {
        title: 'Colonic Hydrotherapy',
        path: '/services/colonic_hydrotherapy',
        icon: <MdOutlineMedication />,
        cName: 'sub-nav'
      },
      {
        title: 'Craniosacral Therapy',
        path: '/services/craniosacral_therapy',
        icon: <MdOutlineMedication />,
      },
      {
        title: 'Somato Emotional Release',
        path: '/services/somato_emotional_release',
        icon: <MdOutlineMedication />,
      },
      {
        title: 'Life Coaching',
        path: '/services/life_coaching',
        icon: <MdOutlineMedication />,
      },
      {
        title: 'Nutritional Therapy',
        path: '/services/nutritional_therapy',
        icon: <MdOutlineMedication />,
      },
      {
        title: 'Meditation',
        path: '/services/meditation',
        icon: <MdOutlineMedication />,
      },
      {
        title: 'Reiki Seichem',
        path: '/services/reiki_seichem',
        icon: <MdOutlineMedication />,
      }
    ]
  },
  {
    title: 'About',
    path: '/about',
    icon: <MdOutlineWavingHand />
  },
  {
    title: 'Testimonials',
    path: '/testimonials',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Contact Me',
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  }
];