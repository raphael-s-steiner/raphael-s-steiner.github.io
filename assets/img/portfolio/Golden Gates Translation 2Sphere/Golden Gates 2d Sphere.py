#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
import math


# In[2]:


P1 = sphere(center=(0,0,0), size=1, color='snow', opacity=0.85, frame=False)


# In[3]:


northpole = np.array([[0,0,1]])
northpole_mat = np.array([[0,1j],
                         [1j,0]])


# In[4]:


s1 = np.array([[1+2j,0],
                          [0,1-2j]])
s2 = np.array([[1,2j],
                            [2j,1]])
s3 = np.array([[1,2],
                           [-2,1]])
s1_inv = np.array([[1-2j,0],
                          [0,1+2j]])
s2_inv = np.array([[1,-2j],
                            [-2j,1]])
s3_inv = np.array([[1,-2],
                           [2,1]])


# In[5]:


gen = np.array([s1, s2, s3, s1_inv, s2_inv, s3_inv])
gen_inv = np.concatenate([gen[3:],gen[:3]])


# In[6]:


N = 5 #Number of iterations
arr_all = np.expand_dims(northpole_mat,axis=0)


# In[7]:


for i in range(N):
    a=np.repeat(arr_all, 6, axis=0)
    a=np.reshape(a,(-1,6,2,2))
    arr_all = gen@a@gen_inv
    arr_all = np.reshape(arr_all,(-1,2,2))


# In[8]:


arr_i = np.imag(arr_all[:,0,0])
arr_j = np.real(arr_all[:,0,1])
arr_k = np.imag(arr_all[:,0,1])
coord = np.c_[arr_i,arr_j,arr_k]


# In[9]:


norm = 5**N
coord /= norm


# In[10]:


P2 = point3d(coord, size=7, color="darkblue")


# In[11]:


P1+P2


# In[ ]:
