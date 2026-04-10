import { User } from "../models/user.models.js";
import { Project } from "../models/project.model.js";
import { ProjectMember } from "../models/projectmember.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import asyncHandler from "../utils/async-handler.js";

const getProjects = asyncHandler(async(req,res,next)=>{
    //test
})

const getProjectById = asyncHandler(async(req,res,next)=>{
    //test
})

const createProject = asyncHandler(async(req,res,next)=>{
    //test
})

const updateProject = asyncHandler(async(req,res,next)=>{
    //test
})

const deleteProject = asyncHandler(async(req,res,next)=>{
    //test
})

const addMembersToProject = asyncHandler(async(req,res,next)=>{
    //test
})

const getProjectMembers = asyncHandler(async(req,res,next)=>{
    //test
})

const updateMemberRole = asyncHandler(async(req,res,next)=>{
    //test
})

const deleteMember = asyncHandler(async(req,res,next)=>{
    //test
})

export {
    getProjects,
    createProject,
    updateProject,
    deleteProject,
    addMembersToProject,
    getProjectMembers,
    updateMemberRole,
    deleteMember,
    getProjectById,
}
